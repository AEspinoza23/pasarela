const CCSMAR = strToCharCode('CCSMAR')
const CCSCAJ = strToCharCode('CCSCAJ')
const CCSMYC = strToCharCode('CCSMYC')
const CCSSFD = strToCharCode('CCSSFD')
const CCSSOM = strToCharCode('CCSSOM')
const CCSUIO = strToCharCode('CCSUIO')
const CCSPMV = strToCharCode('CCSPMV')
const CCSPZO = strToCharCode('CCSPZO')
const CCSBNS = strToCharCode('CCSBNS')
const CCSLFR = strToCharCode('CCSLFR')
const CCSMUN = strToCharCode('CCSMUN')
const CCSLSP = strToCharCode('CCSLSP')
const CCSCUM = strToCharCode('CCSCUM')
const CCSPYH = strToCharCode('CCSPYH')
const CCSSTD = strToCharCode('CCSSTD')
const CCSVIG = strToCharCode('CCSVIG')
const CCSLRV = strToCharCode('CCSLRV')
const CCSBLA = strToCharCode('CCSBLA')
const PMVBRM = strToCharCode('PMVBRM')
const PMVPZO = strToCharCode('PMVPZO')
const PMVMAR = strToCharCode('PMVMAR')
const PMVVLN = strToCharCode('PMVVLN')
const PMVMUN = strToCharCode('PMVMUN')
const PMVTUV = strToCharCode('PMVTUV')
const PMVLRV = strToCharCode('PMVLRV')
const PMVSTD = strToCharCode('PMVSTD')
const VLNPZO = strToCharCode('VLNPZO')
const MARMUN = strToCharCode('MARMUN')
const CCSHAV = strToCharCode('CCSHAV')
const CCSGYE = strToCharCode('CCSGYE')
const CCSSDQ = strToCharCode('CCSSDQ')
const PMVGYE = strToCharCode('PMVGYE')
const PMVVVI = strToCharCode('PMVVVI')
const MGAHAV = strToCharCode('MGAHAV')
const MGAPTY = strToCharCode('MGAPTY')
const VVICCS = strToCharCode('VVICCS')
const CAJPZO = strToCharCode('CAJPZO')
const LRVVLM = strToCharCode('LRVVLM')
const MYCSFD = strToCharCode('MYCSFD')
const MYCSOM = strToCharCode('MYCSOM')
const VLNLRV = strToCharCode('VLNLRV')

const mapMeals = {
  L: 'Almuerzo',
  S: 'Snack',
  B: 'Desayuno',
  D: 'Cena',
  H: 'Comida Caliente',
  R: 'Refrescos',
  C: 'Alcohol de cortesía',
  M: 'Comida',
  P: 'Alcohol para la venta',
  F: 'Comida disponible para la venta',
  O: 'Comida fría',
  N: 'N/A',
  '-': 'Sin servicio de comida'
}

const mapEquip = {
  '343': 'Airbus 340-300',
  '733': 'Boeing 737-300',
  '762': 'Boeing 760-200',
  E90: 'Embraer E190'
}

const mapCities = {
  CCS: 'Caracas, Venezuela',
  PMV: 'Porlamar, Venezuela',
  MAR: 'Maracaibo, Venezuela',
  PZO: 'Puerto Ordaz, Venezuela',
  BNS: 'Barinas, Venezuela',
  LFR: 'La Fria, Venezuela',
  MUN: 'Maturín, Venezuela',
  LSP: 'Las Pierdas, Venezuela',
  CUM: 'Cumana, Venezuela',
  PYH: 'Puerto Ayacucho, Venezuela',
  STD: 'Santo Domingo del Tachira, Venezuela',
  VIG: 'El Vigia, Venezuela',
  LRV: 'Los Roques, Venezuela',
  BLA: 'Barcelona, Venezuela',
  VLN: 'Valencia, Venezuela',
  TUV: 'Tucupita, Venezuela',
  CAJ: 'Canaima, Venezuela',
  MYC: 'Maracay, Venezuela', 
  SFD: 'San Fernando de Apure, Venezuela',
  SOM: 'San Tomé, Venezuela',
  HAV: 'La Habana, Cuba',
  GYE: 'Guayaquil, Ecuador',
  UIO: 'Quito, Ecuador',
  SDQ: 'Santo Domingo, Dominicana',
  PTY: 'Panama, Panama',
  VVI: 'Viru Viru, Bolivia',
  MGA: 'Managua, Nicaragua'
}

const mapMaletas = {
  [CCSPZO]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSBNS]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSLFR]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSLSP]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSPYH]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSVIG]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSLRV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSPMV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSMAR]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSCUM]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSSTD]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSMUN]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSBLA]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSCAJ]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSMYC]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSSFD]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSSOM]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSUIO]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [MARMUN]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVBRM]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVPZO]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVMAR]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVVLN]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVMUN]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVTUV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVLRV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVSTD]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [VLNPZO]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSHAV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSGYE]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CCSSDQ]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVGYE]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [PMVVVI]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [MGAHAV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [MGAPTY]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [VVICCS]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [CAJPZO]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [LRVVLM]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [MYCSFD]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [MYCSOM]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  },
  [VLNLRV]: {
    economica: {
      mano: 1,
      maleta: 1
    },
    ejecutiva: {
      mano: 1,
      maleta: 1
    },
    primera: {
      mano: 1,
      maleta: 1
    }
  }
}


function strToCharCode(str) {
  const _ = Array.prototype.map.call(str, e => e.charCodeAt(0))
  return _.reduce((p, c) => p + c)
}

export function determineMaletas(str) {
  const code = strToCharCode(str)
  return mapMaletas[code]
}

export function determineMeals(mealsString) {
  const meals = mealsString.split('')
  const mealArray = []

  meals.forEach(val => {
    mealArray.push(mapMeals[val])
  })

  return mealArray.join(' + ')
}

export function determineEquip(equipString) {
  return mapEquip[equipString]
}

export function determineCity(cityString) {
  return mapCities[cityString]
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const economic = ['W']
const economicInt11l = ['H', 'O']
const economic2 = ['N']
const ejecutive = ['D', 'C']
const bussines = []

let classEconomic = ''
let classEconomic2 = ''
let classEjecutive = ''
let firstClass = ''

export function determineClasses(classString, isOneWay, isI11l) {

  classEconomic = ''
  classEconomic2 = ''
  classEjecutive = ''
  firstClass = ''

  function isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }

  let toServe

  if (isI11l) {
    toServe = economicInt11l
  } else {
    toServe = economic;
  }

  const letters = Object.keys(classString)

  if (!isEmpty(classString)) {
    for (let i = 0; i < toServe.length; i++) {
      if (letters.includes(toServe[i])) {
        classEconomic = toServe[i]
        break
      }
    }

    if (!isI11l) {
      for (let i = 0; i < economic2.length; i++) {
        if (letters.includes(economic2[i])) {
          classEconomic2 = economic2[i]
          break
        }
      }
    }

    for (let i = 0; i < ejecutive.length; i++) {
      if (letters.includes(ejecutive[i])) {
        classEjecutive = ejecutive[i]
        break
      }
    }

    for (let i = 0; i < bussines.length; i++) {
      if (letters.includes(bussines[i])) {
        firstClass = bussines[i]
        break
      }
    }
  }

  return [classEconomic, classEconomic2, classEjecutive, firstClass]
}

export function isProduction() {
  return process.env.NODE_ENV === 'production'
}
