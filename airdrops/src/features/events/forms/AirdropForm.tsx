import { useAppDispatch, useAppSelector } from "../../../app/lib/stores/store";
import { closeForm, createAirdrop, updateAirdrop } from "../airdropSlice";



export default function AirdropForm() {
  const dispatch = useAppDispatch();
  const selectedAirdrop = useAppSelector(state => state.airdrop.selectedAirdrop);

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
      dispatch(updateAirdrop({
        ...selectedAirdrop, ...data}));
      dispatch(closeForm());
      return;
    }else {

    dispatch(createAirdrop({
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
    }));
       dispatch(closeForm());
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
                <button onClick={() => dispatch(closeForm())} type="button" className="btn btn-neutral">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}