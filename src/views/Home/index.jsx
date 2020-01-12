import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemList from '../../components/ItemList';

function Home() {
  return (
    <>
      <ItemList items={[{
        url: 'https://abrilveja.files.wordpress.com/2019/11/cybertruck_alta.jpg', text: 'Esse é o tesla cybertruck, ele é rápido, resistente(?), e o mais importante, ele é muito, muito feio', tags: ['Carro', 'Feio', 'Horrível'], name: 'CyberTruck', id: '1',
      },
      {
        url: 'https://img.itdg.com.br/tdg/images/recipes/000/184/836/250933/250933_original.jpg?mode=crop&width=710&height=400', text: 'Esta é uma coxinha doce, uma iguaria das camadas mais profundas da deep web', tags: ['Comida', 'Doce', 'Estranho'], name: 'Coxinha Doce', id: '2',
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIucdPAAQX7wwIqCbVj9RgJyNeayXKjCIZO8u3wOP-OMqm72gk', text: 'Este é um cupcake de sabonete, ou um sabonete de cupcake, nunca saberemos ao certo', tags: ['Sabonete', 'Doce', 'Comida'], name: 'Cupbonete', id: '3',
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHUoeaj1Tm0I1yt1rL2wReeBIgzItmAWxyZahC3YHR1ddoWXjx', text: 'Aqui temos um carro feito de comida, embora pareça bastante, ele não é comestível', tags: ['Comida', 'Carro', 'Estranho'], name: 'Carromida', id: '4',
      }]}
      />
    </>
  );
}

export default withRouter(Home);
