import React from 'react'

const CartForm = () => {
    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type='text'
                placeholder='ingrese el nombre'
                name='name'
                value={formData.name}
                onChange={handleOnChange}

            />
            <input
                type='text'
                placeholder='ingrese el nro de tel'
                name='tel'
                value={formData.tel}
                onChange={handleOnChange}

            />
            <input
                type='text'
                placeholder='ingrese el email'
                name='email'
                value={formData.email}
                onChange={handleOnChange}

            />
            <input
                type='text'
                placeholder='Confirme el mail '
                name='email2'
                value={formData.email}
                onChange={handleOnChange}
            />

            <Button type="submit" className="btn btn-out btn-primary btn-square btn-main" data-abc="true" onClick={notify} > Realizar Compra </Button>

        </form>
    )
}

export default CartForm
