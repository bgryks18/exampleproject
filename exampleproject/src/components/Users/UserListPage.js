import React from 'react'
import DataTable from 'react-data-table-component';
import {useHistory} from 'react-router-dom'
const UserListPage = (props) => {
    const {users} = props.UserState
    const history = useHistory();
    const columns = [
        {
            name: 'Kullanıcı',
            selector: (row) => {
                return (
                    /*<><img src={row.avatar} className="rounded-circle" height="35" width="35"/>&nbsp;{row.name}</> 
                    bu şekilde resmi de verebilirdim ama resimlere ulaşılmıyor o yüzden örnek resim koydum*/
                
                    <><img src="https://www.w3schools.com/bootstrap4/newyork.jpg" className="rounded-circle" height="35" width="35"/>&nbsp;{row.name}</> 
                )
            }
        },
        {
            name: 'Tarih',
            selector: row => row.createdAt
        },
        {
            name:'E-posta',
            selector:row=>row.email
        },
        {
            name:'Phone',
            selector:row=>row.phone
        },
        {
            selector:row=>row.id
        }
    ];
    const data = users
    const paginationComponentOptions = { 
        rowsPerPageText: 'Her sayfada:',
        rangeSeparatorText: 'of',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Hepsini Göster' 
        
    }
    return (
        <>
        <h2>Anasayfa</h2>
        <p style={{display:"inline-block"}}>&nbsp;resimlere ulaşılmıyor o yüzden örnek resim koydum</p>
        <div className="buttons float-right">
            <button className="btn btn-outline-secondary mr-1"><i className="fas fa-ellipsis-h"></i></button>
            <button className="btn btn-success" onClick={()=>history.push('/addnewuser')}>Ekle</button>
        </div>
        <DataTable
        columns={columns}
        data={data}
        direction="auto"
        fixedHeaderScrollHeight="500px"
        pagination
        paginationComponentOptions={paginationComponentOptions}
        responsive
        subHeaderAlign="right"
        subHeaderWrap
        striped={true}
        onRowClicked={(row)=>{
            history.push(`/users/${row.id}`)
        }}
        />
        <div className="clear"></div>
        </>
    )
}
export default UserListPage
