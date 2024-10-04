export default (ts: string) => {
    var d = new Date(ts)
    return d.toDateString()
}