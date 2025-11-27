import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="gap-2 hover:bg-accent"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
}
