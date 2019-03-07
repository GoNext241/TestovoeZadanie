function prepare_struct(inputObject){
let result = []
for (let project in inputObject){
  for (let scene in inputObject[project]){
    result.push({
      projectId:project,
      sceneId:scene,
      value: inputObject[project][scene].value,
      title: inputObject[project][scene].title
    })
  }
}
return result
}

const input = {
  p1: {
    s1: {
      title: 'scene 1',
      description: 'description 1',
      value: 1,
    },
    s2: {
      title: 'scene 2',
      description: 'description 2',
      value: 32,
    },
    s3: {
      title: 'scene 3',
      description: 'description 3',
      value: 89,
    },
    s4: {
      title: 'scene 3',
      description: 'description 3',
      value: 0,
    },
  },
  p2: {
    s5: {
      title: 'scene 5',
      description: 'description 5',
      value: 0,
    },
    s6: {
      title: 'scene 6',
      description: 'description 6',
      value: 42,
    },
    s7: {
      title: 'scene 7',
      description: 'description 7',
      value: -9,
    },
  },
}

result = prepare_struct(input)