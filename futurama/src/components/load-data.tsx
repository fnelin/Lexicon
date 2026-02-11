export default async function getData(URL: string) {

    const response = await fetch(URL)
    const data = await response.json();

    return data.items;
}
