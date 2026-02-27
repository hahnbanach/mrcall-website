'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

const NODES: Node[] = [
  { id: 'contact', label: 'Alessandro', sublabel: 'Key Client', x: 0.5, y: 0.5, radius: 40, color: '#0068FF', type: 'center' },
  { id: 'call1', label: 'Called Tuesday', sublabel: '3 min call', x: 0.2, y: 0.25, radius: 28, color: '#0F110C', type: 'data' },
  { id: 'call2', label: 'Called Thursday', sublabel: '7 min call', x: 0.8, y: 0.2, radius: 28, color: '#0F110C', type: 'data' },
  { id: 'invoice', label: 'Invoice #1247', sublabel: 'Issue reported', x: 0.15, y: 0.7, radius: 28, color: '#F7941F', type: 'data' },
  { id: 'email', label: 'Email received', sublabel: '10 min ago', x: 0.82, y: 0.65, radius: 28, color: '#3F413D', type: 'data' },
  { id: 'pref', label: 'Prefers SMS', sublabel: 'Contact pref', x: 0.35, y: 0.82, radius: 24, color: '#D7DCE2', type: 'data' },
  { id: 'meeting', label: 'Meeting booked', sublabel: 'Next Monday', x: 0.65, y: 0.85, radius: 24, color: '#0068FF', type: 'data' },
];

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 450 });
  const timeRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const w = Math.min(container.clientWidth, 600);
        setDimensions({ width: w, height: w * 0.75 });
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
      timeRef.current += 0.01;
      const t = timeRef.current;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const getNodePos = (node: Node) => ({
        x: node.x * dimensions.width + Math.sin(t + node.x * 5) * 3,
        y: node.y * dimensions.height + Math.cos(t + node.y * 5) * 3,
      });

      // Draw edges
      EDGES.forEach((edge) => {
        const fromNode = NODES.find((n) => n.id === edge.from)!;
        const toNode = NODES.find((n) => n.id === edge.to)!;
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
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 104, 255, 0.3)';
        ctx.fill();
      });

      // Draw nodes
      NODES.forEach((node) => {
        const pos = getNodePos(node);
        const isHovered = hoveredNode === node.id;
        const r = node.radius * (isHovered ? 1.15 : 1);

        // Glow for center
        if (node.type === 'center') {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, r + 12, 0, Math.PI * 2);
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
        ctx.font = `bold ${node.type === 'center' ? 13 : 10}px Montserrat, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, pos.x, pos.y - (node.sublabel ? 6 : 0));

        if (node.sublabel) {
          ctx.fillStyle = node.type === 'center' ? 'rgba(255,255,255,0.7)' : 'rgba(15,17,12,0.5)';
          ctx.font = `${node.type === 'center' ? 10 : 8}px Montserrat, system-ui, sans-serif`;
          ctx.fillText(node.sublabel, pos.x, pos.y + 8);
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

    const found = NODES.find((node) => {
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
