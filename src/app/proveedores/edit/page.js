import Form from "@/components/FormProveedor"
import { db } from "@/lib/mysql"
import { editProveedor } from "@/lib/actions"

async function page({searchParams}) {
  const [ proveedor ] = await db.query('select * from proveedores where id = ?', [ searchParams.id ]);

  return (
    <div>
        <h3>Editar artículo {searchParams.id}</h3>
        <Form action={editProveedor} title='Editar artículo' proveedor={proveedor} disabled={false}  />
    </div>
  )
}


export default page