import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";

export default function MessageTextarea({ value, onChange, error, name }: any) {
  return (
    <div>
      <Textarea
        placeholder="Message *"
        rows={4}
        value={value}
        onChange={onChange}
        name={name}
        aria-invalid={!!error}
        aria-describedby="message-error"
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id="message-error"
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
