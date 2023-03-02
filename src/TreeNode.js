import './App.css';


export default function TreeNode({ data }) {
    function renderTreeNode(node) {
        return Object.entries(node).map(function ([key, value]) {
            if (key === 'left' && typeof value === 'object') {
                if (value !== null) {
                    return <li className='root__child root__child_left' key={value.value}>
                        <TreeNode data={value} />
                    </li>
                } else {
                    return null
                }
            } else if (key === 'right' && typeof value === 'object')
                if (value !== null) {
                    return <li className='root__child root__child_right' key={value.value}>
                        <TreeNode data={value} />
                    </li>
                } else {
                    return null
                }
        })
    }

    return data ? (
        <>
            <span className="root">{data.value}</span>
            <ul className='root__children'>{renderTreeNode(data)}</ul>
        </>
    ) : (
        <p className='title'>Нажмите пробел для создания случайного элемента</p>
    );
}