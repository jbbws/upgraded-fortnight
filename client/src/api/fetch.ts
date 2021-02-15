const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const post = async <T>(url: string, data: any): Promise<T> => {
    const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const result = await response.json();
        return <T>result;
    }

    throw new Error("Failed request");
};
