
export const searchSkills = async (search) => {
    const params = new
        URLSearchParams({ q: search });
    const response = await
        fetch(`${import.meta.env.VITE_APP_SEARCH_URL}?${params}`);
        console.log(import.meta.env.VITE_APP_SEARCH_URL)
    if (!response.ok) {
        throw new
            Error(response.statusText);
            
    }
    return await response.json();
}
