import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

export default function EmailInput({ value, onChange, error, name }: any) {
  return (
    <div>
      <Input
        type="email"
        placeholder="Adresse e-mail *"
        value={value}
        onChange={onChange}
        name={name}
        aria-invalid={!!error}
        aria-describedby="email-error"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id="email-error"
            className="text-red-500 text-sm mt-1 ml-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
