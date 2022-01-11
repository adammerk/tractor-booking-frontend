import React from 'react';
import { i18n } from 'src/i18n';
import MachinesListFilter from 'src/view/machines/list/MachinesListFilter';
import MachinesListTable from 'src/view/machines/list/MachinesListTable';
import MachinesListToolbar from 'src/view/machines/list/MachinesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MachinesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.machines.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.machines.list.title')}
        </PageTitle>

        <MachinesListToolbar />
        <MachinesListFilter />
        <MachinesListTable />
      </ContentWrapper>
    </>
  );
}

export default MachinesListPage;
