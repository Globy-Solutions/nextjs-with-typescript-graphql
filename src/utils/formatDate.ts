export const formatDate = (date: string): string => {
    const d = new Date(date);
    return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} ${d.getDate()}`;
    // return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}