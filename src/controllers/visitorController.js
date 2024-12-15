const Visitor = require('../models/visitorModel');

exports.getAllVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.findAll();
    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.status(201).json(visitor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Visitor.update(req.body, { where: { id } });
    res.status(200).json({ updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    await Visitor.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
