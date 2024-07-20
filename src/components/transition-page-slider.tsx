// -> Motion lib
import { motion } from 'framer-motion';

// -> Utils
import { cn } from '@/lib/utils';

// -> Types
interface ITransitionPageSliderProps {
  position: "bottom" | "top"
}

export function TransitionPageSlider({ position }: ITransitionPageSliderProps) {
  return (
    <motion.div 
      className={cn(
        'absolute inset-0 h-screen w-screen bg-pallet-secondary',
        position === 'bottom'  ? 'origin-bottom' : 'origin-top'
      )}
      initial={{ scaleY: position === 'bottom' ? 0 : 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: position === 'bottom' ? 1 : 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
