import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CategoryList from './CategoryList';
import FilterList from './FilterList';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';

const categories = [
	"All",
	"Appliances",
	"Arts, Crafts & Sewing",
	"Baby",
	"Books",
	"CDs & Vinyl",
	"Clothing, Shoes & Jewelry",
	"Computers & Accessories",
	"Electronics",
	"Grocery & Gourmet Food",
	"Health & Household",
	"Industrial & Scientific",
	"Kitchen & Dining",
	"Movies & TV",
	"Office Products",
	"Pet Supplies",
	"Sports & Outdoors", //17
	"Toys & Games",
	"Apps & Games",
	"Automotive",
	"Beauty & Personal Care",
	"Camera & Photo",
	"Cell Phones & Accessories",
	"Collectibles & Fine Art",
	"Digital Music",
	"Gift Cards",
	"Handmade Products",
	"Home & Kitchen",
	"Kindle Store",
	"Magazine Subscriptions",
	"Musical Instruments",
	"Patio, Lawn & Garden",
	"Software",
	"Tools & Home Improvement",
	"Video Games"
]

const presets = [
	{ id: 1, name: "Low Barrier to Entry" },
	{ id: 2, name: "Quick Win" }
];
const checkedId1 = [
	"Appliances",
	"Health & Household",
	"Pet Supplies"
]
const checkedId2 = [
	"Baby",
	"Toys & Games",
	"Beauty & Personal Care",
]
const filterValue1 = {
	avgMonthlySales: {
		min: "50",
		max: ""
	},
	avgMonthlyRevenue: {
		min: "5000",
		max: "25000"
	},
	averagePrice: {
		min: "10.95",
		max: "100.55"
	},
	averageReviewCount: {
		min: "",
		max: ""
	}
}

const filterValue2 = {
	avgMonthlySales: {
		min: "50",
		max: ""
	},
	avgMonthlyRevenue: {
		min: "5000.55",
		max: "25000.95"
	},
	averagePrice: {
		min: "",
		max: ""
	},
	averageReviewCount: {
		min: "10",
		max: ""
	}
}

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPresetId: ""
		}
	}

	handleSelectChange = event => {
		this.setState({
			selectedPresetId: event.target.value
		})
	}

	render() {
		console.log("rendering container");
		const { classes } = this.props;
		return (
		  <Grid className={""} container>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={2}>
				  <FormControl variant="outlined" className={classes.formControl}>
					  {!this.state.selectedPresetId &&
					  <InputLabel shrink={false} disabled={true}>Select a Preset</InputLabel>}
					  <Select
						native
						onChange={this.handleSelectChange}
						input={
							<OutlinedInput
							  className={classes.outlinedInput}
							/>
						}
					  >
						  <option value=""></option>
						  {presets.map(preset =>
							<option key={preset.id} value={preset.id}>{preset.name}</option>
						  )}
					  </Select>
				  </FormControl>
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={1}>
				  <FormControl variant="outlined" className={classes.formControl}>
					  {!this.state.selectedPresetId &&
					  <InputLabel shrink={false} disabled={true}>
						  <Icon>settings</Icon>
					  </InputLabel>}
					  <Select
						native
						// onChange={this.handleSelectChange}
						input={
							<OutlinedInput
							  className={classes.outlinedInput}
							/>
						}
					  >
						  <option value=""></option>
						  {/*{presets.map(preset =>*/}
						  {/*<option key={preset.id} value={preset.id}>{preset.name}</option>*/}
						  {/*)}*/}
					  </Select>
				  </FormControl>
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={3}>
				  gaogaogaogao
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={3}>
				  gaogaogaogao
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={3}>
				  gaogaogaogao
			  </Grid>
			  <Grid className={`${classes.item} ${classes.categoryList}`} item xs={5}>
				  <CategoryList
					categories={categories}
					checked={this.state.selectedPresetId === "1" ? checkedId1 : this.state.selectedPresetId === "2" ? checkedId2 : undefined}
				  />
			  </Grid>
			  <Grid className={`${classes.item} ${classes.filterList}`} item xs={7}>
				  <FilterList filterValues={this.state.selectedPresetId === "1" ? filterValue1 : this.state.selectedPresetId === "2" ? filterValue2 : undefined}/>
			  </Grid>
		  </Grid>
		)
	}
}

const styles = {
	item: {
		paddingLeft: '20px'
	},
	categoryList: {
		paddingTop: "18px"
	},
	filterList: {
		paddingTop: "12px"
	},
	headerItem: {
		height: '70px',
		borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
	},
	formControl: {
		paddingTop: "8px",
		width: "100%"
	},
	outlinedInput: {
		height: "45px"
	}
}
export default withStyles(styles)(Container)