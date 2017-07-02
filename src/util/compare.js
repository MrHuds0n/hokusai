export default (first, second) => {
  let similarities = []
  let differences = []

  for(let one in first) {
    let found = false
    let diff = 0

    for(let two in second) {
      if(one === two) {
        found = two
        diff = Math.abs(second[two] - first[two])
        break
      }
    }

    if(found) {
      similarities.push({
        "id": found,
        "difference": diff
      })
    }
    else {
      differences.push({
        "id": one,
        "quantity": first[one]
      })
    }
  }

  return {
    similarities: similarities,
    differences: differences
  }
}
