const market = {}

market.util = {}
market.util.pick = a => {
  return a[~~(Math.random() * a.length)]
}

market.Pack = (class Pack {
  constructor(obj) {
    this.name = obj.name
    this.cost = obj.cost
    this.data = {}
  }

  createBlook(obj) {
    if (typeof this.data[obj.percent] === "undefined") this.data[obj.percent] = []
    this.data[obj.percent].push(obj)
  }
})

market.Player = (class Player {
  constructor(obj) {
    this.name = obj.name
    this.tokens = obj.tokens
  }
  
  setTokens(tokens) {
    this.tokens = tokens
  }
  
  openPack(pack) {
    const seed = Math.random() * 100
    for (const blookChunk of Object.entries(pack.data)) {
      if (seed < blookChunk[0]) {
        this.tokens -= pack.cost
        return market.util.pick(blookChunk[1])
      }
    }
  }
})
