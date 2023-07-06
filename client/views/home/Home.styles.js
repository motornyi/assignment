import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`

export const Sidebar = styled.div`
  width: 200px;
  flex-shrink: 0;
  padding: 15px;
  border-radius: 4px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`

export const Content = styled.div`
  padding: 15px;
  margin-left: 15px;
  width: 100%;
  border-radius: 4px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`

export const FilterRow = styled.div`
  margin-bottom: 20px;
`

export const FilterItemRow = styled.div`
  margin-bottom: 5px;
`

export const Label = styled.label`
  margin-left: 5px;
  cursor: pointer;
`

export const FilterTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const TableWrapper = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  width: 100%;
  position: relative;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px;

  & td,
  & th {
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 15px;
    text-align: left;
  }

  tr:hover td {
    background-color: #eee;
  }
`

export const THead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #fff;
`
