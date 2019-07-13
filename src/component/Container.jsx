import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CategoryList from './CategoryList';
import FilterList from './FilterList';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import SaveOutlined from '@material-ui/icons/SaveOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
	{ id: "1", name: "Low Barrier to Entry" },
	{ id: "2", name: "Quick Win" }
];

const settingItems = [
	{ id: "1", name: "Save", icon: "save" },
	{ id: "2", name: "Save As", icon: "" },
	{ id: "3", name: "Rename" },
	{ id: "4", name: "Share", icon: "share" },
	{ id: "5", name: "Delete", icon: "delete", color: "red" },
]

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
			selectedPresetId: "",
			selectedSettingItem: ""
		}
	}

	handleSelectPresetChange = event => {
		console.log(event.target.value);
		this.setState({
			selectedPresetId: event.target.value
		})
	}

	handleSelectSettingChange = event => {
		this.setState({
			selectedSettingItem: event.target.value
		})
	}

	render() {
		console.log("rendering container");
		const { classes } = this.props;
		return (
		  <Grid className={""} container>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={2}>
				  <FormControl
					variant="outlined"
					className={`${classes.formControl} ${classes.formControlPreset}`}>
					  {!this.state.selectedPresetId &&
					  <InputLabel shrink={false} disabled={true}>Select a Preset</InputLabel>}
					  <Select
						onChange={this.handleSelectPresetChange}
						value={this.state.selectedPresetId}
						input={
							<OutlinedInput
							  className={classes.outlinedInput}
							/>
						}
					  >
						  <MenuItem value=""></MenuItem>
						  {presets.map(preset =>
							<MenuItem key={`${preset.id}#selectPreset`} value={preset.id}>{preset.name}</MenuItem>
						  )}
					  </Select>
				  </FormControl>
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={1}>
				  <FormControl style={{ overflow: "hidden" }}
							   variant="outlined"
							   className={`${classes.formControl} ${classes.formControlSettings}`}>
					  <InputLabel shrink={false} disabled={true}>
						  <SettingsOutlined/>
					  </InputLabel>
					  <Select
						onChange={this.handleSelectSettingChange}
						value={""}
						input={
							<OutlinedInput
							  className={classes.outlinedInput}
							/>
						}
					  >
						  <MenuItem
							value={"1"}
						  >
							  <SaveOutlined/>Save
						  </MenuItem>
						  <MenuItem
							value={"2"}
						  >
							  <SaveOutlined/>Save as
						  </MenuItem>
						  <MenuItem
							value={"3"}
						  >
							  Rename
						  </MenuItem>
						  <MenuItem
							value={"4"}
						  >
							  <ShareOutlined/>Share
						  </MenuItem>
						  <MenuItem
							style={{ borderTop: "1px solid #f5f5f5", color: "red" }}
							value={"5"}
						  >
							  <DeleteOutlined style={{ color: "red" }}/>Delete
						  </MenuItem>
					  </Select>
				  </FormControl>
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={4}>
				  gaogaogaogao
			  </Grid>
			  <Grid className={`${classes.item} ${classes.headerItem}`} item xs={5}>
				  <Button color="default" variant="outlined" className={classes.btnTutorials}>
					  <PlayArrow/>View Tutorials
				  </Button>
				  <Button color="secondary" variant="outlined" className={classes.btnClearFilter}>
					  Clear Filters
				  </Button>
				  <Button color="secondary" variant="outlined" className={classes.btnShowKeywords}>
					  Show keywords
				  </Button>
			  </Grid>
			  <Grid className={`${classes.item} ${classes.categoryList}`} item xs={5}>
				  <CategoryList
					categories={categories}
					checked={this.state.selectedPresetId === "1" ? checkedId1 : this.state.selectedPresetId === "2" ? checkedId2 : undefined}
				  />
			  </Grid>
			  <Grid className={`${classes.item} ${classes.filterList}`} item xs={7}>
				  <FilterList
					filterValues={this.state.selectedPresetId === "1" ? filterValue1 : this.state.selectedPresetId === "2" ? filterValue2 : undefined}/>
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
		paddingTop: "8px"
	},
	formControlPreset: {
		width: "100%"
	},
	formControlSettings: {
		width: "80%",
		// "& .MuiPaper-root": {
		// 	overflow: "hidden"
		// }
	},
	outlinedInput: {
		height: "45px"
	},
	btnTutorials: {
		color: '#51cdfb',
		borderColor: '#51cdfb',
	},
	btnClearFilter: {

	},
	btnShowKeywords: {
		color: '#f49931',
		borderColor: '#f49931',
	}
}
export default withStyles(styles)(Container)