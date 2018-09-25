<template>
    <div>
        <v-breadcrumbs>
            <v-icon slot="divider">chevron_right</v-icon>
            <v-breadcrumbs-item
                    v-for="breadcrumb in breadcrumbs"
                    :key="breadcrumb.text"
                    :disabled="breadcrumb.disabled"
                    :to="breadcrumb.to"
            >
                {{ breadcrumb.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
        <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <v-btn color="info">New</v-btn>
            <v-btn color="error">Delete</v-btn>
        </v-toolbar>
        <v-data-table
                select-all
                v-model="selected"
                :headers="headers"
                :items="users"
                item-key="id"
                :loading="false"
                class="elevation-1"
        >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
                <tr :active="props.selected">
                    <td class="short-column text-xs-center">
                        <v-checkbox hide-details primary
                                    v-model="props.selected"
                        />
                    </td>
                    <td class="short-column text-xs-center">{{ props.item.no }}</td>
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-sm-center">{{ props.item.auth }}</td>
                    <td class="text-sm-center">{{ props.item.status }}</td>
                    <td class="text-sm-center">{{ props.item.CreateDate }}</td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
      data: () => ({
        breadcrumbs: [
          { text: 'Home', disabled: false, to: '/' },
          { text: 'user' },
        ],
        selected: [],
        headers: [
          { text: 'No', value: 'no', align: 'center' },
          { text: 'Name', value: 'name', align: 'center' },
          { text: 'Auth', value: 'auth', align: 'center' },
          { text: 'Status', value: 'status', align: 'center' },
          { text: 'CreateDt', value: 'CreateDate', align: 'center' },
        ],
        users: [
          { id: 1, no: 7, name: 'kdo', auth: 'admin', status: 'ok', CreateDate: '2015-01-12' },
          { id: 2, no: 6, name: 'bbq', auth: 'owner', status: 'ok', CreateDate: '2016-01-12' },
          { id: 3, no: 5, name: 'hjh', auth: 'user', status: 'ok', CreateDate: '2017-01-12' },
          { id: 4, no: 4, name: 'gom', auth: 'hospital', status: 'ok', CreateDate: '2018-01-12' },
          { id: 5, no: 3, name: 'lyh', auth: 'owner', status: 'ok', CreateDate: '2015-10-12' },
          { id: 6, no: 2, name: 'jwt', auth: 'hospital', status: 'ok', CreateDate: '2015-10-12' },
          { id: 7, no: 1, name: 'iu', auth: 'user', status: 'ok', CreateDate: '2015-11-12' },
        ],
      }),
      methods: {
        handleClick: () => {
          console.log('clicked');
        },
      },
    };
</script>

<style>
.short-column {
    width: 80px;
}

</style>