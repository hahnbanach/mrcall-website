import HeroBlock from '@/components/HeroBlock';
import MobileBlock from '@/components/MobileBlock';
import AgentFactoryBlock from '@/components/AgentFactoryBlock';
import RelationshipBlock from '@/components/RelationshipBlock';
import UniversalBridgeBlock from '@/components/UniversalBridgeBlock';
import TalkToMrCallBlock from '@/components/TalkToMrCallBlock';
import RoadmapBlock from '@/components/RoadmapBlock';
import PricingBlock from '@/components/PricingBlock';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <MobileBlock />
      <AgentFactoryBlock />
      <RelationshipBlock />
      <UniversalBridgeBlock />
      <TalkToMrCallBlock />
      <RoadmapBlock />
      <PricingBlock />
    </>
  );
}
