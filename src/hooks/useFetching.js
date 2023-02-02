import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setİsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setİsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setİsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}