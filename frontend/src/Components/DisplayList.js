const starterList = [
  {
    "name": "do the laundry",
    "CompleteBy": "Friday"
  },
    {
    "name": "do the laundry again",
    "CompleteBy": "Thursday"
  }
]

export default function DisplayList() {
  return (
    <ol>
      {starterList.map(item => <li>{`Item: ${item.name} Due By: ${item.CompleteBy}`}</li>)}
    </ol>
  )
}