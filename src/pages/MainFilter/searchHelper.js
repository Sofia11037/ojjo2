export function searchFilter(arr, filters) {
    let arrResult = arr;

    if (filters.brand) {
        arrResult = switchBrand(arrResult, filters.brand)
    }
    if (filters.price) {
        arrResult = switchPrice(arrResult, filters.price)
    }
    if (filters.forWho) {
        arrResult = switchForWho(arrResult, filters.forWho)
    }
    if (filters.collection) {
        arrResult = switchCollection(arrResult, filters.collection)
    }
    if (filters.season) {
        arrResult = switchSeason(arrResult, filters.season)
    }

    return arrResult.length > 0 ? arrResult : null;
}

function switchBrand(arr, string) {
    return arr.filter(item => item.brand === string)
}

function switchPrice(arr, string) {
    return arr.filter(item => item.price === string)
}

function switchForWho(arr, string) {
    return arr.filter(item => item.forWho === string)
}

function switchCollection(arr, string) {
    return arr.filter(item => item.collection === string)
}

function switchSeason(arr, string) {
    return arr.filter(item => item.season === string)
}