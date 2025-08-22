import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmitStatusProps {
  status: 'idle' | 'success' | 'error';
  isSubmitting: boolean;
  className?: string;
}

export const SubmitStatus = ({ status, isSubmitting, className }: SubmitStatusProps) => {
  if (status === 'idle' && !isSubmitting) return null;

  return (
    <div className={cn("mt-4 text-center", className)}>
      {isSubmitting && (
        <div className="flex items-center justify-center gap-2 text-primary">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm font-inter">Enviando consulta...</span>
        </div>
      )}
      
      {status === 'success' && !isSubmitting && (
        <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 animate-in slide-in-from-bottom-2 duration-300">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-inter font-medium">
            ¡Consulta enviada exitosamente! Te contactaremos pronto.
          </span>
        </div>
      )}
      
      {status === 'error' && !isSubmitting && (
        <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg p-3 animate-in slide-in-from-bottom-2 duration-300">
          <XCircle className="w-5 h-5" />
          <span className="text-sm font-inter font-medium">
            Error al enviar la consulta. Por favor, inténtalo de nuevo.
          </span>
        </div>
      )}
    </div>
  );
};
