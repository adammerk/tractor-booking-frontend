import React from 'react';
import { i18n } from 'src/i18n';
import MachineTypesListFilter from 'src/view/machineTypes/list/MachineTypesListFilter';
import MachineTypesListTable from 'src/view/machineTypes/list/MachineTypesListTable';
import MachineTypesListToolbar from 'src/view/machineTypes/list/MachineTypesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MachineTypesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.machineTypes.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.machineTypes.list.title')}
        </PageTitle>

        <MachineTypesListToolbar />
        <MachineTypesListFilter />
        <MachineTypesListTable />
      </ContentWrapper>
    </>
  );
}

export default MachineTypesListPage;
