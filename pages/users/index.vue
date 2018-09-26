<template>
    <div>
        <v-breadcrumbs>
            <v-icon slot="divider">chevron_right</v-icon>
            <v-breadcrumbs-item
                    v-for="breadcrumb in breadcrumbs"
                    :key="breadcrumb.text"
                    :disabled="breadcrumb.disabled"
                    :href="breadcrumb.to"
            >
                {{ breadcrumb.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
        <h1>User <small>list</small></h1>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex>
                                <v-text-field
                                        label="Id"
                                        placeholder="id"
                                        counter="10"
                                        clearable
                                />
                            </v-flex>
                            <v-flex>
                                <v-text-field
                                        label="Name"
                                        placeholder="홍길동"
                                        counter="10"
                                        clearable
                                />
                            </v-flex>
                            <v-flex>
                                <v-text-field
                                        label="Email"
                                        placeholder="abc@gmail.com"
                                        counter="50"
                                        clearable
                                />
                            </v-flex>
                            <v-flex>
                                <v-select
                                        label="Auth"
                                        :items="authItems"
                                        item-text="text"
                                        item-value="auth"
                                />
                            </v-flex>
                            <v-flex>
                                <v-select
                                        label="Status"
                                        :items="statusItems"
                                        item-text="text"
                                        item-value="status"
                                />
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="white">
                    Reset<v-icon right>restore</v-icon>
                </v-btn>
                <v-btn color="white">
                    Search<v-icon right>search</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-toolbar flat color="white">
            <v-spacer/>
            <v-btn color="info" href="/users/new">New<v-icon right>add</v-icon></v-btn>
            <v-btn color="error">Delete<v-icon right>delete</v-icon></v-btn>
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
                    <td class="text-xs-center">
                        <nuxt-link :to="{ name: 'users-id', params: { id: props.item.id } }">
                            {{ props.item.accountId }}
                        </nuxt-link>
                    </td>
                    <td class="text-xs-center">
                        <nuxt-link :to="{ name: 'users-id', params: { id: props.item.id } }">
                            {{ props.item.name }}
                        </nuxt-link>
                    </td>
                    <td class="text-sm-center">{{ props.item.email }}</td>
                    <td class="text-sm-center">{{ props.item.auth }}</td>
                    <td class="text-sm-center">{{ props.item.status }}</td>
                    <td class="text-sm-center">{{ props.item.createDate }}</td>
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
          { text: 'Id', value: 'accountId', align: 'center' },
          { text: 'Name', value: 'name', align: 'center' },
          { text: 'email', value: 'email', align: 'center' },
          { text: 'Auth', value: 'auth', align: 'center' },
          { text: 'Status', value: 'status', align: 'center' },
          { text: 'CreateDt', value: 'createDate', align: 'center' },
        ],
        authItems: [
          { text: '선택', status: null },
          { auth: 'admin', text: '관리자' },
          { auth: 'user', text: '사용자' },
          { auth: 'hospital', text: '병원' },
        ],
        statusItems: [
          { text: '선택', status: null },
          { text: '가입', status: 'join' },
          { text: '탈퇴', status: 'exit' },
        ],
        users: [
          {
            id: 1,
            no: 7,
            accountId: 'kdo',
            name: 'kdo',
            email: 'kdo@gmail.com',
            auth: 'admin',
            status: 'ok',
            createDate: '2015-01-12',
          },
          {
            id: 2,
            no: 6,
            accountId: 'bbq',
            name: 'bbq',
            email: 'kdo@gmail.com',
            auth: 'owner',
            status: 'ok',
            createDate: '2016-01-12'
          },
          {
            id: 3,
            no: 5,
            accountId: 'hjh',
            name: 'hjh',
            email: 'kdo@gmail.com',
            auth: 'user',
            status: 'ok',
            createDate: '2017-01-12'
          },
          {
            id: 4,
            no: 4,
            accountId: 'gom',
            name: 'gom',
            email: 'kdo@gmail.com',
            auth: 'hospital',
            status: 'ok',
            createDate: '2018-01-12'
          },
          {
            id: 5,
            no: 3,
            accountId: 'lyh',
            name: 'lyh',
            email: 'kdo@gmail.com',
            auth: 'owner',
            status: 'ok',
            createDate: '2015-10-12'
          },
          {
            id: 6,
            no: 2,
            accountId: 'jwt',
            name: 'jwt',
            email: 'kdo@gmail.com',
            auth: 'hospital',
            status: 'ok',
            createDate: '2015-10-12'
          },
          {
            id: 7,
            no: 1,
            accountId: 'iu',
            name: 'iu',
            email: 'kdo@gmail.com',
            auth: 'user',
            status: 'ok',
            createDate: '2015-11-12'
          },
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