import "antd/dist/antd.css";
import { Table,
  Button,
  message,
  Menu,
  Layout
} from 'antd';
import { Link } from "react-router-dom";
//import { render } from "@testing-library/react";
import { useEffect, useState } from 'react';
import InvestimentoService from "../../service/InvestimentoService";

const { Header, Content, Footer } = Layout;
const { Column } = Table;

export default function ListarInvestimentos(){

  const [investimentos, setInvestimentos] = useState([]);

  useEffect(() => {
    refreshInvestimentos();
      return () => {
      }
    }, [])

  async function refreshInvestimentos(){
    InvestimentoService.retrieveAllInvestimentos()
      .then(
        response => {
          setInvestimentos(response.data)
        }
      )
  }

  function remove(record){
    InvestimentoService.deleteInvestimento(record.codigo);
    message.success('Investimento removido com sucesso!');
  }

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/cadastrar-investimentos">
                Cadastrar Investimento
              </Link>
            </Menu.Item>
            
            <Menu.Item key="2">
              <Link to="/listar-investimentos">
                Listar Investimentos
              </Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <h2>INVESTIMENTOS</h2>
          
            <Table dataSource={investimentos}>
              <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo" />
              
              <Column title="Valor" dataIndex="valorCota" key="valorCota" />
              
              <Column title="Quantidade de Cotas" dataIndex="quantidadeCota" key="quantidadeCota" />
              
              <Column title="Data da Compra" dataIndex="dataCompra" key="dataCompra" />
              
              <Column title="Remover" key="atualizar" render={
                (text, record) => (
                  <Button onClick={() => remove(record)} type="primary">
                    Remover
                  </Button>
                )}
              />
            </Table>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>My Invest ©2021</Footer>
      </Layout>
    </div>
  );

}