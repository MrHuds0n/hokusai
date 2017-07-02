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

  for(let one in second) {
    let found = false

    for(let each of similarities) {
      if(one === each.id) {
        found = true
        break
      }
    }

    if(!found) {
      differences.push({
        "id": one,
        "quantity": second[one] * -1
      })
    }
  }

  return {
    similarities: similarities,
    differences: differences
  }
}
