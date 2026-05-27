import translations from '../../../lang/de.json';

export function translate(key: string): string {
    return (translations as Record<string, string>)[key] ?? key;
}