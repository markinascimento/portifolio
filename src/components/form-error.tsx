// -> Icons lib
import { CircleAlert } from "lucide-react";

export function FormError({ message }: { message: string }) {
  return (
    <div className="flex w-full items-center gap-1">
      <CircleAlert className="size-3 text-red-700" strokeWidth={3.5} />
      <small className="font-medium text-red-700">{message}</small>
    </div>
  );
}
