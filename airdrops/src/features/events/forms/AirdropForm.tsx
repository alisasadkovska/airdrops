import type { Airdrop } from "../../../app/lib/data/types";

type Props = {
    setFormOpen: (isOpen: boolean) => void;
    createAirdrop: (newAirdrop: Airdrop) => void;
    selectedAirdrop?: Airdrop | null;
    updateAirdrop: (updatedAirdrop: Airdrop) => void;
}

export default function AirdropForm({ setFormOpen, createAirdrop, selectedAirdrop, updateAirdrop }: Props) {

  const initialValues = selectedAirdrop ?? {
    title: '',
    task: '',
    description: '',
    logoUrl: '',
    end_date: ''
  }

  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    if (selectedAirdrop) {
      updateAirdrop({
        ...selectedAirdrop, ...data});
      setFormOpen(false);
      return;
    }else {

    createAirdrop({
      ...data,
      id: crypto.randomUUID(),
      title: data.title as string,
      task: data.task as string,
      description: data.description as string,
      logoUrl: data.image_url as string,
      date_added: "",
      end_date: data.end_date as string | undefined,
      steps: [],
      confirmed: false,
      live: true,
      requirements: [],
      tags: [],
      refLink: ""
    });
      setFormOpen(false);
  }
  }

  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
        <h3 className="text-2xl font-semibold text-center text-primary">
         {selectedAirdrop ? 'Edit Airdrop' : 'Create Airdrop'}
          </h3>
        <form action={onSubmit} className="flex flex-col gap-3 w-full">
            <input defaultValue={initialValues.title} name='title' type="text" className="input input-lg w-full" placeholder="Airdrop Title"></input>
             <input defaultValue={initialValues.task} name='task' type="text" className="input input-lg w-full" placeholder="Airdrop Task"></input>
              <textarea defaultValue={initialValues.description} name='description'
              className="textarea textarea-lg w-full" placeholder="Airdrop Description"></textarea>
            <input defaultValue={initialValues.logoUrl} name="image_url" type="text" className="input input-lg w-full" placeholder="Logo Url"></input>
            <input 
               defaultValue={initialValues.end_date ? new Date(initialValues.end_date).toISOString().slice(0,16) : ''} 
               name="end_date" 
               type="datetime-local" 
               className="input input-lg w-full" 
               placeholder="Date">
            </input>
            <div className="flex justify-end w-full gap-3">
                <button onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}