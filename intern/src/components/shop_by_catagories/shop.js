import React from 'react';
import handbag from '../../assets/handbag.png'
import './shop.css'
function Shop(){
    return(
        <div className='head-shop'>
            <center><h1 className='heading-shop'>Shop by Categories</h1></center>
            <div className='flex-con'>
                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>SARRES</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>LEHENGAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>SHORT KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>KAFTANS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>SHIRTS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>MEN'S KURTAS</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>JEWELLERY</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>MEN'S ACCESSORIES</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>HOME DECOR</div>
                </div>

                <div className='flex-shop'>
                    <img src={handbag}></img>
                    <div>KITCHEN AND DINING</div>
                </div>
            </div>
        </div>
    );
}
export default Shop;