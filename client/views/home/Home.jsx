import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { COLUMNS, FILTERS } from '../../constants'

import useHomeStore from './Home.store'

import * as S from './Home.styles'

const Home = observer(() => {
  const [store, { getDataDebounced, onFilterChange }] = useHomeStore()

  useEffect(() => {
    getDataDebounced(store.filters)
  }, [store.filters])

  if (!store.data) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Sidebar>
        {FILTERS.map(({ key, name, values }) => (
          <S.FilterRow key={key}>
            <S.FilterTitle>{name}</S.FilterTitle>
            {values.map((value) => (
              <S.FilterItemRow>
                <input
                  type="checkbox"
                  id={value}
                  name={value}
                  onChange={(e) => {
                    const checked = e.target.checked
                    onFilterChange(key, value, checked)
                  }}
                />
                <S.Label for={value}>{value}</S.Label>
              </S.FilterItemRow>
            ))}
          </S.FilterRow>
        ))}
      </S.Sidebar>

      <S.Content>
        <S.TableWrapper>
          <S.Table>
            <S.THead>
              <tr>
                {COLUMNS.map(({ name }) => (
                  <th>{name}</th>
                ))}
              </tr>
            </S.THead>

            <tbody>
              {store.data.map((row) => (
                <tr>
                  {COLUMNS.map(({ key }) => (
                    <td>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>
      </S.Content>
    </S.Wrapper>
  )
})

export default Home
