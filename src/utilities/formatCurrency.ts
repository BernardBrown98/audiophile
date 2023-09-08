export const formatCurrency = (price: number) => {
    const usDollar = Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
    })
    return usDollar.format(price)
}
