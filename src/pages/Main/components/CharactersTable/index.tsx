import React, { ReactElement, useEffect } from "react";

import { Table } from "antd";
import { charactersTableColumns } from "./constants";
import { Continer, TableWrapper } from "./styles";
import { ICharactersFilters } from "entities/characters";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getCharacters } from "store/main/slice";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";
import { extractIdFromUrl } from "utils/extractIdFromUrl";

interface ICharactersTableProps {
  filters: ICharactersFilters;
}

const CharactersTable = ({ filters }: ICharactersTableProps): ReactElement => {
  const navigate = useNavigate();
  const { isLoading, characters, paginationMeta } = useAppSelector(
    ({ main }: RootState) => main
  );
  const dispatch = useAppDispatch();

  const handleChangePagination = (page: number): void => {
    dispatch(getCharacters({ page, filters }));
  };

  const handleRowClick = (url: string): void => {
    const id = extractIdFromUrl(url);

    id && navigate(`/${id}`);
  };

  useEffect(() => {
    dispatch(getCharacters({ filters }));
  }, [filters]);

  return (
    <Continer>
      <TableWrapper>
        <Table
          dataSource={characters}
          columns={charactersTableColumns}
          rowKey="name"
          scroll={{ x: 1000 }}
          loading={isLoading}
          onRow={(record) => {
            return {
              onClick: () => handleRowClick(record.url),
            };
          }}
          pagination={{
            showSizeChanger: false,
            position: ["bottomCenter"],
            total: paginationMeta?.count,
            onChange: handleChangePagination,
          }}
        />
      </TableWrapper>
    </Continer>
  );
};

export default CharactersTable;
