import React from 'react';
import { i18n } from 'src/i18n';
import BookingsListFilter from 'src/view/bookings/list/BookingsListFilter';
import BookingsListTable from 'src/view/bookings/list/BookingsListTable';
import BookingsListToolbar from 'src/view/bookings/list/BookingsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BookingsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.bookings.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.bookings.list.title')}
        </PageTitle>

        <BookingsListToolbar />
        <BookingsListFilter />
        <BookingsListTable />
      </ContentWrapper>
    </>
  );
}

export default BookingsListPage;
