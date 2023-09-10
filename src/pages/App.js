import gitLogo from '../assets/git-logo.png'
import { Container } from './styles'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import ItemRepo from '../components/ItemRepo/ItemRepo';
import { api } from '../services/api'
import { useState } from 'react';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    console.log(api.get())
    console.log(currentRepo)
    const { data } = await api.get(`repos/${currentRepo}`)
    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }

    }
    alert('Não encontrado ou já existente')


  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(pre => pre.id !== id))
  }


  return (
    <Container>

      <img width="72" src={gitLogo} alt="git logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} onClick={handleRemoveRepo}/>)}
    </Container>

  );
}

export default App;
