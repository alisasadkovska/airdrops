type Props = {
    setFormOpen: (isOpen: boolean) => void;
}

export default function AirdropForm({ setFormOpen }: Props) {
  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
        <h3 className="text-2xl font-semibold text-center text-primary">Create new Airdrop</h3>
        <form className="flex flex-col gap-3 w-full">
            <input type="text" className="input input-lg w-full" placeholder="Airdrop Title"></input>
             <input type="text" className="input input-lg w-full" placeholder="Airdrop Task"></input>
              <textarea
              className="textarea textarea-lg w-full" placeholder="Airdrop Description"></textarea>
            <input type="text" className="input input-lg w-full" placeholder="Date"></input>
            <div className="flex justify-end w-full gap-3">
                <button onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}