import React from 'react';
import { i18n } from 'src/i18n';
import PreferedBookingChannelListFilter from 'src/view/preferedBookingChannel/list/PreferedBookingChannelListFilter';
import PreferedBookingChannelListTable from 'src/view/preferedBookingChannel/list/PreferedBookingChannelListTable';
import PreferedBookingChannelListToolbar from 'src/view/preferedBookingChannel/list/PreferedBookingChannelListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PreferedBookingChannelListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.preferedBookingChannel.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.preferedBookingChannel.list.title')}
        </PageTitle>

        <PreferedBookingChannelListToolbar />
        <PreferedBookingChannelListFilter />
        <PreferedBookingChannelListTable />
      </ContentWrapper>
    </>
  );
}

export default PreferedBookingChannelListPage;
