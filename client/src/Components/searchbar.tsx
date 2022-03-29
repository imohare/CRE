import { Input } from "@rebass/forms";

export default function Form(props: any) {
  return (
    <form className="Search">
      <Input onChange={props.searchArtists} value={props.searchval} placeholder="search" color="#c5c5c5"/>
      <br/>
    </form>
  )
} 