import {
  AlertCircle,
  AlertTriangle,
  Brain,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  Droplet,
  FileCheck,
  Heart,
  HelpCircle,
  Home,
  ListChecks,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

/**
 * Icons a Sanity document is allowed to name.
 *
 * Content comes from the CMS but components cannot, so a page stores the icon
 * by name and looks it up here. An unknown name falls back rather than
 * throwing — a typo in the CMS should cost an icon, not the whole page.
 */
const ICONS: Record<string, LucideIcon> = {
  AlertCircle,
  AlertTriangle,
  Brain,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  Droplet,
  FileCheck,
  Heart,
  HelpCircle,
  Home,
  ListChecks,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  XCircle,
}

export function iconFor(name?: string): LucideIcon {
  return (name && ICONS[name]) || CheckCircle
}
