const {
    Container,
    Form,
    Grid,
    Header,
    Icon,
    List,
    Menu,
    Message,
    Segment,
    Tab
} = semanticUIReact;

import TableBuilder from "../components/TableBuilder";
import { options } from "../constants";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "MAVEN",
            items: [
                "MAVEN",
                "YUM",
                "DOCKER",
                "NPM",
                "PYPI",
                "DEBIAN",
                "RUBYGEM",
                "GENERIC",
                "CONAN"
            ],
            repos: []
        };
    }

    addItemHandler = repoName => {
        const updateRepo = {
            ...this.state.repo
        };
    };

    onDeleteHandler = itemKey => {
        let newRepos = [...this.state.repos];
        newRepos.splice(personIndex, 1);
        this.setState({
            repos: newRepos
        });
    };

    componentDidMount() {
        const newItems = this.state.items.slice(0, 8);
        this.setState({
            items: newItems,
            repos: [
                {
                    type: "MAVEN",
                    hControls: [
                        { control: "Input", formValue: "ux-design" },
                        { control: "Select", formValue: "ux-design" }
                    ],
                    vControls: [
                        { control: "Select", formValue: "ux-design" },
                        { control: "Input", formValue: "ux-design" },
                        { control: "Select", formValue: "ux-design" }
                    ],
                    users: [],
                    artx: []
                },
                {
                    type: "DOCKER",
                    hControls: [
                        { control: "Select", formValue: "ux-design" },
                        { control: "Input", formValue: "ux-design" },
                        { control: "Select", formValue: "ux-design" }
                    ],
                    vControls: [{ control: "Select", formValue: "ux-design" }],
                    users: [],
                    artx: []
                }
            ]
        });
    }


    render() {
        const { items, activeItem } = this.state;

        const grid = {
            tabWidth: 10
        };
        const list = [
            `# Upload files: <br/>curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c' \
  http://engci-maven.cisco.com/artifactory/bms-arti-587-cdn/path/to/file \
  --data-binary @/path/to/file "`,
            `# Upload files: curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c' \
  http://engci-maven.cisco.com/artifactory/bms-arti-587-cdn/path/to/file \
  --data-binary @/path/to/file "`,
            `# Upload files: curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c' \
  http://engci-maven.cisco.com/artifactory/bms-arti-587-cdn/path/to/file \
  --data-binary @/path/to/file "`,
            `# Upload files: curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c' \
  http://engci-maven.cisco.com/artifactory/bms-arti-587-cdn/path/to/file \
  --data-binary @/path/to/file "`,
            `# Upload files: curl -XPUT -u 'bms-arti-587-deployer:0h802mzpxqg55b1c' \
  http://engci-maven.cisco.com/artifactory/bms-arti-587-cdn/path/to/file \
  --data-binary @/path/to/file "`
        ];
        const tabpane = [
            {
                menuItem: "MAVEN",
                render: () => (
                    <Tab.Pane>
                        <Message header="MAVEN" positive list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "YUM",
                render: () => (
                    <Tab.Pane>
                        <Message header="YUM" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "DOCKER",
                render: () => (
                    <Tab.Pane>
                        <Message header="DOCKER" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "NPM",
                render: () => (
                    <Tab.Pane>
                        <Message header="NPM" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "PYPI",
                render: () => (
                    <Tab.Pane>
                        <Message header="PYPI" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "DEBIAN",
                render: () => (
                    <Tab.Pane>
                        <Message header="DEBIAN" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "GENERIC CDN",
                render: () => (
                    <Tab.Pane>
                        <Message header="GENERIC CDN" list={list} />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "CONAN",
                render: () => (
                    <Tab.Pane>
                        <Message header="CONAN" list={list} />
                    </Tab.Pane>
                )
            }
        ];
        const labels = [
            {
                menuItem: "HOSTED",
                render: () => (
                    <Tab.Pane>
                        <TableBuilder
                            added={this.addItemHandler}
                            deleted={this.onDeleteHandler}
                            repos={this.state.repos}
                        />
                    </Tab.Pane>
                )
            },
            {
                menuItem: "VIRTUAL",
                render: () => <Tab.Pane />
            },
            {
                menuItem: "USERS",
                render: () => <Tab.Pane />
            },
            {
                menuItem: "ARTIFACTORY-X",
                render: () => <Tab.Pane />
            }
        ];

        return (
            <Container fluid id="main">
                <Form className="attached fluid segment">
                    <Grid padded columns="equal">
                        <Grid.Row stretched>
                            <Grid.Column width={16}>
                                <Segment.Group className="segments-hover">
                                    <Segment>
                                        <Grid>
                                            <Grid.Column width={7}>
                                                <List horizontal>
                                                    <List.Item>
                                                        <Message positive>
                                                            <Message.Header as="h6">
                                                                Status: READY
                                </Message.Header>
                                                        </Message>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Content>
                                                            <Message negative>
                                                                <Message.Header as="h6">
                                                                    Provision: ERROR
                                  </Message.Header>
                                                            </Message>
                                                        </List.Content>
                                                    </List.Item>
                                                </List>
                                            </Grid.Column>
                                        </Grid>
                                    </Segment>
                                    <Segment>
                                        <Form.Group>
                                            <Form.Input
                                                required
                                                width={4}
                                                fluid
                                                label="Name:"
                                                placeholder="Name"
                                                type="text"
                                            />
                                            <Form.Input
                                                required
                                                width={4}
                                                fluid
                                                label="Team"
                                                placeholder="Team"
                                                type="text"
                                            />
                                            <Form.Input
                                                required
                                                width={4}
                                                label="Type"
                                                placeholder="Type"
                                                type="text"
                                            />
                                            <Form.Input
                                                width={4}
                                                label="Location"
                                                type="text"
                                                placeholder="Location"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Input
                                                width={4}
                                                label="Requestor:"
                                                placeholder="Requestor"
                                                type="text"
                                            />
                                            <Form.Input
                                                width={4}
                                                label="Case Number"
                                                placeholder="Case Number"
                                                type="text"
                                            />
                                            <Form.Input
                                                width={4}
                                                label="Notes"
                                                placeholder="Notes"
                                                type="text"
                                            />
                                        </Form.Group>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row stretched>
                            <Grid.Column width={16}>
                                <Segment className="segment-hover">
                                    <Header>Artifactory Template: </Header>
                                    <Tab
                                        className="tabs"
                                        menu={{
                                            borderless: true,
                                            attached: false,
                                            tabular: false
                                        }}
                                        panes={tabpane}
                                        grid={grid}
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row stretched>
                            <Grid.Column width={16}>
                                <Segment.Group className="segments-hover">
                                    <Segment>
                                        <Header>Repository Template Builder: </Header>
                                    </Segment>
                                    <Segment>
                                        <Form className="attached fluid segment">
                                            <Form.Group widths="equal">
                                                <Form.Select
                                                    options={options}
                                                    label={{
                                                        children: "Download Access: Anonymous",
                                                        htmlFor: "form-select-control-download-access"
                                                    }}
                                                    placeholder="Gender"
                                                    search
                                                    searchInput={{
                                                        id: "form-select-control-download-access"
                                                    }}
                                                />
                                                <Form.Input
                                                    label="Deployer Password"
                                                    placeholder="Password"
                                                    type="password"
                                                />
                                                <Form.Input
                                                    label="Notes"
                                                    placeholder="Notes"
                                                    type="text"
                                                />
                                                <Form.Input
                                                    label="Notes"
                                                    placeholder="Notes"
                                                    type="text"
                                                />
                                                <Form.Input
                                                    label="Notes"
                                                    placeholder="Notes"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Form>
                                        <div id="repo-template-builder">
                                            <Grid padded columns="equal">
                                                <Grid.Row stretched>
                                                    <Grid.Column width={3}>
                                                        <Menu pointing vertical>
                                                            {items.map(item => (
                                                                <Menu.Item
                                                                    id={`rtb_${item}`}
                                                                    active={activeItem === item}
                                                                    key={item}
                                                                    name={item}
                                                                    onClick={this.handleItemClick}
                                                                >
                                                                    {item}
                                                                </Menu.Item>
                                                            ))}
                                                        </Menu>
                                                    </Grid.Column>
                                                    <Grid.Column className="fixed-width-" width={1}>
                                                        <Header className="navigate-user">
                                                            <Icon name="arrow alternate circle right outline" />
                                                        </Header>
                                                    </Grid.Column>
                                                    <Grid.Column width={12}>
                                                        <Tab panes={labels} />
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </Container>
        );
    }
}

export default Main;
