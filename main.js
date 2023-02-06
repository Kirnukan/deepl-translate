import fetch from 'node-fetch';

async function fetchDeepleTranslate(word, targetLanguage) {
    const url = "https://api-free.deepl.com/v2/translate"
    const authKey = '' //Write your authKey here
    const response =
        await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `DeepL-Auth-Key ${authKey}`,
                'User-Agent': 'YourApp/1.2.3',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `text=${encodeURIComponent(word)}&target_lang=${targetLanguage}`
        })
    try {
        return await response.json()
    } catch (error) {
        console.error(`Error parsing response as JSON: ${error.message}`)
    }
}

const result = fetchDeepleTranslate('This is translate to Russian', 'RU')
console.log(result)