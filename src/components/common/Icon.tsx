import {
  BrainCircuit,
  Code2,
  Container,
  Database,
  Github,
  Globe,
  Landmark,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Server,
  Target,
  Users,
  Wrench,
  type LucideProps,
} from "lucide-react";

const registry = {
  ai: BrainCircuit,
  code: Code2,
  database: Database,
  devops: Container,
  fintech: Landmark,
  github: Github,
  globe: Globe,
  layers: Layers,
  lightbulb: Lightbulb,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  realtime: Radio,
  server: Server,
  target: Target,
  users: Users,
  wrench: Wrench,
} as const;

export type IconName = keyof typeof registry;

export const Icon = ({ name, ...props }: { name: IconName } & LucideProps) => {
  const Glyph = registry[name];
  return <Glyph {...props} />;
};
