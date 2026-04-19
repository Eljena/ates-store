export function replaceUmlauts(text: string): string {
    if (text === '') {
        return '';
    }

    let normalizedText = text;

    text = text.toLowerCase();

    normalizedText = normalizedText.replaceAll('ae', 'ä');
    normalizedText = normalizedText.replaceAll('oe', 'ö');
    normalizedText = normalizedText.replaceAll('ue', 'ü');


    return capitalizeFirstLetter(normalizedText);
}

function capitalizeFirstLetter(text: string): string {
    if (text === '') {
        return '';
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}
