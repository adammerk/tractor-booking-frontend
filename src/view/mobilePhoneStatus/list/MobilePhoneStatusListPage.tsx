import React from 'react';
import { i18n } from 'src/i18n';
import MobilePhoneStatusListFilter from 'src/view/mobilePhoneStatus/list/MobilePhoneStatusListFilter';
import MobilePhoneStatusListTable from 'src/view/mobilePhoneStatus/list/MobilePhoneStatusListTable';
import MobilePhoneStatusListToolbar from 'src/view/mobilePhoneStatus/list/MobilePhoneStatusListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MobilePhoneStatusListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mobilePhoneStatus.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mobilePhoneStatus.list.title')}
        </PageTitle>

        <MobilePhoneStatusListToolbar />
        <MobilePhoneStatusListFilter />
        <MobilePhoneStatusListTable />
      </ContentWrapper>
    </>
  );
}

export default MobilePhoneStatusListPage;
