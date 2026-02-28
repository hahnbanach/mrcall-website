'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Node {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  type: 'center' | 'data';
}

interface Edge {
  from: string;
  to: string;
}

const EDGES: Edge[] = [
  { from: 'contact', to: 'call1' },
  { from: 'contact', to: 'call2' },
  { from: 'contact', to: 'invoice' },
  { from: 'contact', to: 'email' },
  { from: 'contact', to: 'pref' },
  { from: 'contact', to: 'meeting' },
  { from: 'call1', to: 'invoice' },
  { from: 'email', to: 'invoice' },
];

export default function MemoryGraph() {
  const t = useTranslations('memoryGraph');

  const NODES: Node[] = [
    { id: 'contact', label: t('alessandro'), sublabel: t('keyClient'), x: 0.5, y: 0.5, radius: 55, color: '#0068FF', type: 'center' },
    { id: 'call1', label: t('calledTuesday'), sublabel: t('threeMinCall'), x: 0.18, y: 0.22, radius: 38, color: '#0F110C', type: 'data' },
    { id: 'call2', label: t('calledThursday'), sublabel: t('sevenMinCall'), x: 0.82, y: 0.18, radius: 38, color: '#0F110C', type: 'data' },
    { id: 'invoice', label: t('invoice'), sublabel: t('issueReported'), x: 0.13, y: 0.72, radius: 38, color: '#F7941F', type: 'data' },
    { id: 'email', label: t('emailReceived'), sublabel: t('tenMinAgo'), x: 0.85, y: 0.65, radius: 38, color: '#3F413D', type: 'data' },
    { id: 'pref', label: t('prefersSms'), sublabel: t('contactPref'), x: 0.33, y: 0.85, radius: 32, color: '#D7DCE2', type: 'data' },
    { id: 'meeting', label: t('meetingBooked'), sublabel: t('nextMonday'), x: 0.67, y: 0.88, radius: 32, color: '#0068FF', type: 'data' },
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 540 });
  const timeRef = useRef(0);
  const nodesRef = useRef(NODES);
  nodesRef.current = NODES;

  useEffect(() => {
    const updateDimensions = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const w = Math.min(container.clientWidth, 700);
        setDimensions({ width: w, height: w * 0.77 });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const draw = () => {
      const nodes = nodesRef.current;
      timeRef.current += 0.01;
      const t = timeRef.current;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const getNodePos = (node: Node) => ({
        x: node.x * dimensions.width + Math.sin(t + node.x * 5) * 3,
        y: node.y * dimensions.height + Math.cos(t + node.y * 5) * 3,
      });

      // Draw edges
      EDGES.forEach((edge) => {
        const fromNode = nodes.find((n) => n.id === edge.from)!;
        const toNode = nodes.find((n) => n.id === edge.to)!;
        const from = getNodePos(fromNode);
        const to = getNodePos(toNode);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(15, 17, 12, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Animated pulse along edge
        const pulse = (Math.sin(t * 2 + fromNode.x * 3) + 1) / 2;
        const px = from.x + (to.x - from.x) * pulse;
        const py = from.y + (to.y - from.y) * pulse;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 104, 255, 0.3)';
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pos = getNodePos(node);
        const isHovered = hoveredNode === node.id;
        const r = node.radius * (isHovered ? 1.15 : 1);

        // Glow for center
        if (node.type === 'center') {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, r + 16, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 104, 255, 0.08)';
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'center' ? node.color : '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.type === 'center' ? 0 : 2;
        if (node.type !== 'center') ctx.stroke();

        // Label
        ctx.fillStyle = node.type === 'center' ? '#FFFFFF' : '#0F110C';
        ctx.font = `bold ${node.type === 'center' ? 15 : 11}px Montserrat, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, pos.x, pos.y - (node.sublabel ? 8 : 0));

        if (node.sublabel) {
          ctx.fillStyle = node.type === 'center' ? 'rgba(255,255,255,0.7)' : 'rgba(15,17,12,0.5)';
          ctx.font = `${node.type === 'center' ? 11 : 9}px Montserrat, system-ui, sans-serif`;
          ctx.fillText(node.sublabel, pos.x, pos.y + 10);
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions, hoveredNode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const nodes = nodesRef.current;
    const found = nodes.find((node) => {
      const nx = node.x * dimensions.width;
      const ny = node.y * dimensions.height;
      return Math.sqrt((x - nx) ** 2 + (y - ny) ** 2) < node.radius + 5;
    });

    setHoveredNode(found?.id || null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex justify-center"
    >
      <canvas
        ref={canvasRef}
        style={{ width: dimensions.width, height: dimensions.height }}
        className="cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
      />
    </motion.div>
  );
}
