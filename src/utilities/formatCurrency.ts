export const formatCurrency = (price: number) => {
    const usDollar = Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    })
    return usDollar.format(price)
}
